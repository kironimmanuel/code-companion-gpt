interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const Heading = ({ children, level, size = 'md', className, ...props }: HeadingProps) => {
    type HeadingElementProps = HeadingProps & {
        as?: React.ElementType;
    };

    const HeadingElement = `h${level}` as React.ElementType;

    const sizeClass = {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
    }[size];

    return (
        <HeadingElement {...(props as HeadingElementProps)} className={`${className} ${sizeClass}`}>
            {children}
        </HeadingElement>
    );
};
