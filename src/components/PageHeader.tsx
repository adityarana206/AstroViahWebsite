import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function PageHeader({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs,
}: {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-4">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            {title}{" "}
            <span className="gradient-text">{titleHighlight}</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
