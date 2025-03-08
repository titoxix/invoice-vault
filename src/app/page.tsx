import CardList from "@/components/card-list";

export default function Home() {
  return (
    <div className="grid items-center p-4 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 mt-6 row-start-2 sm:items-start">
        <CardList />
      </main>
    </div>
  );
}
