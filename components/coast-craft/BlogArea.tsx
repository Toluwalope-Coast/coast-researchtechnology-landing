// @/components/coast-craft/BlogArea.tsx
import Link from "next/link";
import Styles from "./coast-craft.module.css";
import { IBlogArea } from "@/lib/type";
import Image from "next/image";
import { formatTimeStampToLocalDate } from "@/utils/utilities";

export const BlogArea: React.FC<IBlogArea> = ({ blogArea }) => {
  return (
    <section className={Styles.section} id="news-area">
      <div className={Styles.newsContainer}>
        <div className={Styles.containerContent}>
          <div className={Styles.containerFirstCol}>
            <div className={Styles.newsContent}>
              <div className={Styles.onGoing}>
                {blogArea.map((post, index) => (
                  <div key={index} className={Styles.news}>
                    <Link href={`./${post.post_url.slice(39)}`}>
                      <Image
                        src={post.post_image_url}
                        alt={post.title}
                        width={1000}
                        height={1000}
                      />
                    </Link>
                    <div className={Styles.blog2Content}>
                      <p className={Styles.postTime}>
                        {formatTimeStampToLocalDate(post.time)}
                      </p>
                      <Link
                        href={`./${post.post_url.slice(39)} py-16`}
                        className={Styles.linkTitle}
                      >
                        {post.title}
                      </Link>
                      <p className={Styles.author}>{post.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={Styles.secondContainer}>
              <div className={Styles.newsletter}>
                <h3>Subscribe to our newsletter</h3>
                <form action="submit">
                  <input
                    type="email"
                    id="nemail"
                    placeholder="Your E-mail"
                    name="Email"
                  />
                  <button type="submit" className={Styles.newsBtn}>
                    Subscribe
                  </button>
                </form>
                <p>
                  Stay informed and inspired with our Coast Craft newsletter.
                </p>
                <p>
                  Receive the latest updates on software development, tech
                  trends, and insightful articles delivered straight to your
                  inbox.
                </p>
                <p>
                  Join our community and craft exceptional code as we navigate
                  the digital horizon together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
