import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <div className="relative">
            <button
                onClick={toggleTheme}
                className={cn(
                    "fixed z-50 p-2 rounded-full transition-colors duration-300",
                    "focus:outline-none",
                    
                    "max-sm:top-15", 
                    "max-sm:right-1",
                    "max-sm:bottom-auto",

                    // --- Estilos para desktop y tablets  ---
                    "sm:top-5",
                    "sm:right-5",
                    "sm:bottom-auto"
                )}
            >
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                )}
            </button>
        </div>
    );
};

{/* --- CODIGO ORIGINAL DEL TOGGLE --- */} 

// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";



// export const ThemeToggle = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);



//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme");
//         if (storedTheme === "dark") {
//             setIsDarkMode(true);
//             document.documentElement.classList.add("dark");
//         } else {
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         }
//     }, []);


//     const toggleTheme = () => {
//         if (isDarkMode) {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         } else {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//             setIsDarkMode(true);
//         }
//     }



//     return (
//         <button onClick={toggleTheme} className={cn(
//             "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//             "focus:outlin-hidden"
//         )}>


//             {isDarkMode ? (
//                 <Sun className="h-6 w-6 text-yellow-300" />
//             ) : (
//                 <Moon className="h-6 w-6 text-blue-900" />
//             )}
//         </button>
//     );
// };