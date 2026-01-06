import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon, children, className = '', ...props }) => {
    return (
        <div className={`card ${className}`} {...props}>
            {icon && <div className="card-icon">{icon}</div>}
            {title && <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2">{title}</h3>}
            {description && <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>}
            {children}
        </div>
    );
};

export default Card;
