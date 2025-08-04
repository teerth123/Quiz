export default function Navbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
            >
                {children}
            </body>
        </html>
    );
}
