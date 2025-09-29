import { Modal as FlowbiteModal } from "flowbite-react";

interface Props {
  show: boolean;
}

export default function Modal({ show }: Props) {
  console.log("Modal", show);
  return (
    <FlowbiteModal show={true} position="bottom-center">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Modal Title</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          metus ac nisi ultricies varius.
        </p>
      </div>
    </FlowbiteModal>
  );
}
