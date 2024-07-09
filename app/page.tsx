import PageSelector from "@/components/PageSelector";
import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PageSelector />
    </div>
  );
}
