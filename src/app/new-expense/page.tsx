import Form from "@/components/form";
import TakePhoto from "@/components/take-photo";
export default function NewExpense() {
  return (
    <div className="p-6">
      <TakePhoto />
      <Form />
    </div>
  );
}
