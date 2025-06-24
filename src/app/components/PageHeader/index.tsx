import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function PageHeader()  {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7x1 mx-auto px-4 flex items-center justify-between">
                <a className="flex items-center gap-2">
                    <Image
                        src="/logo-exemplo.png"
                        alt="Logo On-moveis"
                        width={120}
                        height={60}
                        className="h-auto w-auto"
                    />
                </a>
                
                {/* Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#01187F] uppercase">
                    <a href="#servicos" className="hover:opacity-80">Serviços</a>
                    <a href="#servicos" className="hover:opacity-80">Galeria</a>
                    <a href="#servicos" className="hover:opacity-80">Contato e Orçamento</a>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-[#01187F]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28}/> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu mobile */}
            
        </header>
    )
    
}

export default PageHeader;
