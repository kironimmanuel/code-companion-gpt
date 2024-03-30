interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const Paragraph = ({ children, size = 'md', className, ...props }: ParagraphProps) => {
    const sizeClass = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
    }[size];

    return (
        <p className={`${className} ${sizeClass}`} {...props}>
            {children}
        </p>
    );
};
