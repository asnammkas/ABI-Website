import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps & { glowColor?: "blue" | "indigo" | "rose" | "green" }> = ({ title, description, icon, children, className = '', glowColor, ...props }) => {

    // Map colors to shadow classes
    const glowClasses = {
        blue: "hover:border-blue-500 hover:shadow-[0_0_30px_-5px_theme('colors.blue.500/0.3')]",
        indigo: "hover:border-indigo-500 hover:shadow-[0_0_30px_-5px_theme('colors.indigo.500/0.3')]",
        rose: "hover:border-rose-500 hover:shadow-[0_0_30px_-5px_theme('colors.rose.500/0.3')]",
        green: "hover:border-green-500 hover:shadow-[0_0_30px_-5px_theme('colors.green.500/0.3')]"
    };

    const glowClass = glowColor ? glowClasses[glowColor] : "";

    return (
        <div className={`card ${glowClass} ${className}`} {...props}>
            {icon && <div className="card-icon">{icon}</div>}
            {title && <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2">{title}</h3>}
            {description && <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>}
            {children}
        </div>
    );
};

export default Card;
