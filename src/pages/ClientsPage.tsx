
import React, { useRef, useState } from "react";

type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

const initialClients: Client[] = [
  { id: "1", name: "Alice Morgan", email: "alice@example.com", phone: "07700111222" },
  { id: "2", name: "Bob Harris", email: "bob@example.com", phone: "07700333444" },
];

const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const uploadRef = useRef<HTMLInputElement>(null);

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      // Basic CSV parsing (expects header: name,email,phone)
      const rows = text.split("\n").slice(1).filter(Boolean);
      const parsed = rows.map((r, idx) => {
        const [name, email, phone] = r.split(",");
        return { id: `c${Date.now()}${idx}`, name, email, phone };
      });
      setClients(c => [...c, ...parsed]);
    };
    reader.readAsText(file);
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Client List</h2>
      <div className="mb-6 flex items-center gap-4">
        <button
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
          onClick={() => uploadRef.current?.click()}
        >
          Upload CSV
        </button>
        <input
          type="file"
          accept=".csv"
          ref={uploadRef}
          onChange={handleCsvUpload}
          className="hidden"
        />
        <span className="text-sm text-gray-500">Upload .csv with: name,email,phone header</span>
      </div>
      <div className="border rounded bg-white shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-muted font-semibold text-sm">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id} className="border-t">
                <td className="px-4 py-2">{client.name}</td>
                <td className="px-4 py-2">{client.email}</td>
                <td className="px-4 py-2">{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {clients.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">No clients found.</div>
        )}
      </div>
    </div>
  );
};

export default ClientsPage;
