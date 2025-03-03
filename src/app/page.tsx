import CardList from "@/components/card-list";

export default function Home() {
  console.log("Home");
  return (
    <div className="grid items-center p-4 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        {/*  <div>
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Invoice Vault
          </h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Form />
        </div> */}
        <CardList />
      </main>
      {/*  <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-center sm:text-left">© 2025 Invoice Vault</p>
      </footer> */}
    </div>
  );
}
