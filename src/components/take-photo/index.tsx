"use client";

import { useRef, useState, useEffect } from "react";

export default function TakePhoto() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Start the camera
  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { exact: "environment" }, // Request back camera
          width: { ideal: 1280 }, // Set resolution
          height: { ideal: 720 },
        },
      });
      setStream(newStream); // Store stream state

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture the photo
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        setPhoto(canvasRef.current.toDataURL("image/png")); // Convert to Data URL
      }
    }
  };

  // Stop the camera stream
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  // Delete the photo
  const deletePhoto = () => {
    setPhoto(null);
    stopCamera(); // Stop camera when deleting the photo
  };

  // Ensure the camera stops when the component unmounts
  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="flex flex-col items-center mt-6">
      <video
        ref={videoRef}
        autoPlay
        playsInline // Prevents fullscreen on iOS
        className="w-full max-w-md border"
      />

      <div className="flex gap-2 mt-2">
        <button
          onClick={startCamera}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start Camera
        </button>
        <button
          onClick={capturePhoto}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Capture Photo
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {photo && (
        <div className="mt-4">
          <h3>Captured Photo:</h3>
          <img src={photo} alt="Captured" className="border" />
          <button
            onClick={deletePhoto}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete Photo
          </button>
        </div>
      )}
    </div>
  );
}
