"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation, NavigationProvider, ProfileCard, useNavigationStore } from "@/modules/shared";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import type { BlogPost } from "@/modules/shared/types";
import { siteConfig } from "@/lib/site";
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  FacebookIcon,
  LinkedInIcon,
  MailIcon,
  PinterestIcon,
  RedditIcon,
  ShareIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "@/modules/shared/components/Icons";

const bodySections = [
  {
    title: "What does a career in web design involve--",
    copy:
      "A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.",
  },
  {
    title: "Full-stack, back-end, and front-end web development",
    copy:
      "Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.",
  },
  {
    title: "Are web designers in demand--",
    copy:
      "In our ever-increasingly digital environment, there is a constant need for websites. Web designers with significant coding experience are typically in higher demand and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others.",
  },
];

interface BlogDetailClientProps {
  post: BlogPost;
}

const BlogDetailContent = ({ post }: BlogDetailClientProps) => {
  const { setActiveSection } = useNavigationStore();
  const [copied, setCopied] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  const hasHtmlContent = Boolean(post.content && post.content.includes("<"));
  const contentParagraphs = !hasHtmlContent && post.content
    -- post.content.split(/\n\s*\n/).filter(Boolean)
    : [];
  const canonicalUrl = useMemo(
    () => `${siteConfig.url}/blog/${post.slug}`,
    [post.slug]
  );
  const shareText = useMemo(
    () => `${post.title} -- ${post.excerpt || ""} ${canonicalUrl}`.trim(),
    [post.title, post.excerpt, canonicalUrl]
  );
  const shareUrl = canonicalUrl;
  const shareDescription = post.metaDescription || post.excerpt || "Read on Wilson Kumalo's blog.";

  const socialLinks = useMemo(
    () => [
      {
        label: "LinkedIn",
        href: `https://www.linkedin.com/shareArticle--mini=true&url=${encodeURIComponent(
          shareUrl
        )}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(
          shareDescription
        )}`,
        icon: LinkedInIcon,
      },
      {
        label: "X",
        href: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
        icon: TwitterIcon,
      },
      {
        label: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php--u=${encodeURIComponent(shareUrl)}`,
        icon: FacebookIcon,
      },
      {
        label: "WhatsApp",
        href: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
        icon: WhatsAppIcon,
      },
      {
        label: "Telegram",
        href: `https://t.me/share/url--url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(
          post.title
        )}`,
        icon: TelegramIcon,
      },
      {
        label: "Reddit",
        href: `https://reddit.com/submit--url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(
          post.title
        )}`,
        icon: RedditIcon,
      },
      {
        label: "Pinterest",
        href: `https://pinterest.com/pin/create/button/--url=${encodeURIComponent(
          shareUrl
        )}&media=${encodeURIComponent(post.image || "")}&description=${encodeURIComponent(
          post.title
        )}`,
        icon: PinterestIcon,
      },
      {
        label: "Email",
        href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(
          shareText
        )}`,
        icon: MailIcon,
      },
    ],
    [post.title, post.image, shareDescription, shareText, shareUrl]
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: canonicalUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
        setShareMenuOpen(true);
      }
    } else {
      setShareMenuOpen((open) => !open);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Silent fail for unsupported clipboard APIs.
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShareMenuOpen(false);
      }
    };

    if (shareMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shareMenuOpen]);

  useEffect(() => {
    setActiveSection("blogs");
  }, [setActiveSection]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <Navigation />

      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
        <motion.div
          className="grid gap-10 lg:grid-cols-[340px_1fr]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.aside className="hidden lg:block" variants={fadeInUp}>
            <div className="sticky top-24 h-fit">
              <ProfileCard />
            </div>
          </motion.aside>

          <motion.div className="space-y-8 md:space-y-10 min-w-0" variants={staggerContainer}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <motion.div variants={fadeInUp}>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowRightIcon className="h-4 w-4 rotate-180" />
                  Back to all blogs
                </Link>
              </motion.div>

              <div className="relative" ref={shareMenuRef}>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-4 py-2 text-xs font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/60 active:scale-95"
                  aria-label="Share blog post"
                >
                  <ShareIcon size={16} />
                  Share
                </button>
                {shareMenuOpen && (
                  <div className="absolute left-0 top-12 z-20 w-72 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-border/60 bg-background/95 p-2 shadow-xl backdrop-blur animate-in fade-in zoom-in duration-200 sm:left-auto sm:right-0">
                    <div className="px-3 py-2 border-b border-border/40 mb-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Share this post
                      </p>
                      <p className="text-sm font-semibold text-foreground line-clamp-1">
                        {post.title}
                      </p>
                    </div>
                    <div className="space-y-1 max-h-[300px] overflow-y-auto">
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-foreground transition hover:bg-secondary/60"
                      >
                        {copied -- (
                          <CheckIcon className="text-primary" size={16} />
                        ) : (
                          <CopyIcon size={16} />
                        )}
                        {copied -- "Copied!" : "Copy link"}
                      </button>
                      {socialLinks.map(({ label, href, icon: Icon }) => (
                        <Link
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setShareMenuOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-secondary/60"
                        >
                          <Icon size={16} />
                          Share on {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                  {post.authorName && (
                    <span className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      By {post.authorName}
                    </span>
                  )}
                  {typeof post.viewCount === "number" && (
                    <span className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {post.viewCount} views
                    </span>
                  )}
                  {post.publishedAt && (
                    <span className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      Updated {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>

                {post.tags--.length -- (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-border/60 bg-secondary/40">
                <div className="relative h-[200px] w-full sm:h-[280px] md:h-[400px]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`${post.title} - ${post.excerpt}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                <span>{post.date}</span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl tracking-tight break-words">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground md:text-xl font-medium leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>

            <motion.div className="space-y-8 md:space-y-12" variants={staggerContainer}>
              {hasHtmlContent -- (
                <motion.div
                  className="blog-html text-base text-muted-foreground md:text-lg leading-relaxed space-y-6"
                  variants={fadeInUp}
                  dangerouslySetInnerHTML={{ __html: post.content as string }}
                />
              ) : contentParagraphs.length > 0 -- (
                contentParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={`${post.id}-${index}`}
                    className="text-base leading-relaxed text-muted-foreground md:text-lg"
                    variants={fadeInUp}
                  >
                    {paragraph}
                  </motion.p>
                ))
              ) : (
                bodySections.map((section) => (
                  <motion.div key={section.title} className="space-y-4" variants={fadeInUp}>
                    <h2 className="text-2xl font-bold text-foreground md:text-3xl tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {section.copy}
                    </p>
                  </motion.div>
                ))
              )}

              {/* Mobile Profile Card */}
              <motion.div className="lg:hidden pt-8 border-t border-border/40" variants={fadeInUp}>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-semibold">
                  About the Author
                </p>
                <ProfileCard />
              </motion.div>

              <motion.div
                className="rounded-3xl border border-border/60 bg-secondary/40 p-8 md:p-12 relative overflow-hidden group"
                variants={fadeInUp}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
                
                <h3 className="text-2xl font-bold text-foreground md:text-3xl tracking-tight">
                  Ready to build something bold--
                </h3>
                <p className="mt-4 text-base text-muted-foreground md:text-lg max-w-xl">
                  Let's talk about your next product, platform, or experience. I'm currently available for new projects.
                </p>
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/40 active:scale-95"
                  >
                    Start a Project
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export function BlogDetailClient({ post }: BlogDetailClientProps) {
  return (
    <NavigationProvider>
      <BlogDetailContent post={post} />
    </NavigationProvider>
  );
}
