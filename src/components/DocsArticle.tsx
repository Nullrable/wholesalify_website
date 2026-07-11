import Link from "next/link";
import type { DocArticle } from "@/lib/docs";
import DocsCallout from "./DocsCallout";
import DocsMockup from "./DocsMockup";

function renderInline(text: string) {
  // Bold using ** **
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m)
      return (
        <strong key={i} className="font-semibold text-primary">
          {m[1]}
        </strong>
      );
    return <span key={i}>{part}</span>;
  });
}

export default function DocsArticle({ article }: { article: DocArticle }) {
  return (
    <article className="prose-doc">
      <header className="mb-8 pb-6 border-b border-gray-100">
        <div className="text-xs text-cta font-medium uppercase tracking-wider mb-3">
          {article.category.replace(/-/g, " ")}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          {article.title}
        </h1>
        <p className="mt-3 text-base text-secondary">{article.description}</p>
        <div className="mt-4 flex items-center gap-3 text-[12px] text-gray-500">
          <span>{article.readingTime}</span>
          <span>·</span>
          <span>Updated {article.lastUpdated}</span>
        </div>
      </header>

      <div className="space-y-5 text-[15px] leading-relaxed text-secondary">
        {article.blocks.map((block, i) => {
          switch (block.type) {
            case "h2":
              return (
                <h2
                  key={i}
                  id={block.id}
                  className="text-2xl font-bold text-primary pt-4 mt-8 scroll-mt-24"
                >
                  {block.text}
                </h2>
              );
            case "h3":
              return (
                <h3
                  key={i}
                  id={block.id}
                  className="text-lg font-semibold text-primary pt-2 mt-6 scroll-mt-24"
                >
                  {block.text}
                </h3>
              );
            case "p":
              return <p key={i}>{renderInline(block.text)}</p>;
            case "ul":
              return (
                <ul
                  key={i}
                  className="list-disc pl-6 space-y-1.5 marker:text-cta/60"
                >
                  {block.items.map((item, j) => (
                    <li key={j}>{renderInline(item)}</li>
                  ))}
                </ul>
              );
            case "ol":
              return (
                <ol
                  key={i}
                  className="list-decimal pl-6 space-y-1.5 marker:text-cta/60 marker:font-semibold"
                >
                  {block.items.map((item, j) => (
                    <li key={j}>{renderInline(item)}</li>
                  ))}
                </ol>
              );
            case "callout":
              return (
                <DocsCallout
                  key={i}
                  variant={block.variant}
                  title={block.title}
                  text={block.text}
                  action={"action" in block ? block.action : undefined}
                />
              );
            case "code":
              return (
                <div key={i} className="my-6">
                  {block.filename && (
                    <div className="text-[11px] text-gray-500 font-mono px-3 py-1 bg-gray-50 border border-b-0 border-gray-200 rounded-t-md">
                      {block.filename}
                    </div>
                  )}
                  <pre
                    className={`overflow-x-auto text-[12.5px] leading-relaxed bg-slate-900 text-slate-100 px-4 py-3 ${
                      block.filename ? "rounded-b-md" : "rounded-md"
                    }`}
                  >
                    <code>{block.code}</code>
                  </pre>
                </div>
              );
            case "mockup":
              return <DocsMockup key={i} variant={block.variant} />;
            case "table":
              return (
                <div
                  key={i}
                  className="my-6 overflow-x-auto rounded-lg border border-gray-200"
                >
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        {block.headers.map((h, j) => (
                          <th
                            key={j}
                            className="text-left font-semibold px-4 py-2.5 border-b border-gray-200"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, j) => (
                        <tr
                          key={j}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          {row.map((cell, k) => (
                            <td key={k} className="px-4 py-2.5 text-secondary">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      {(article.prev || article.next) && (
        <nav className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-gray-100 pt-6 text-sm">
          {article.prev ? (
            <Link
              href={article.prev.href}
              className="group block rounded-lg border border-gray-200 p-4 hover:border-cta/40 hover:bg-cta/5 transition-colors"
            >
              <div className="text-xs text-gray-500 mb-1">← Previous</div>
              <div className="font-semibold text-primary group-hover:text-cta">
                {article.prev.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
          {article.next ? (
            <Link
              href={article.next.href}
              className="group block rounded-lg border border-gray-200 p-4 hover:border-cta/40 hover:bg-cta/5 transition-colors text-right"
            >
              <div className="text-xs text-gray-500 mb-1">Next →</div>
              <div className="font-semibold text-primary group-hover:text-cta">
                {article.next.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  );
}
