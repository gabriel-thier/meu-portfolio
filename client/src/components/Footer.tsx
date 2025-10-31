export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Digital Product Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
