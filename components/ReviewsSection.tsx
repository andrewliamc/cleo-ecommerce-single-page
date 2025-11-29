import { RatingStars } from "@/components/ui/RatingStars";
import { reviews } from "@/lib/data";

export function ReviewsSection() {
  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) /
    reviews.length;

  return (
    <section className="section-container space-y-8 py-16" id="reviews">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-cleo-charcoal sm:text-4xl">
            Loved by those who love quiet rituals.
          </h2>
          <p className="text-sm text-cleo-charcoal/70">
            Real notes from small-batch soap loyalists.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-soft">
          <RatingStars rating={averageRating} />
          <div className="flex flex-col leading-tight">
            <span className="font-ui text-sm font-semibold text-cleo-charcoal">
              {averageRating.toFixed(1)} / {reviews.length} reviews
            </span>
            <span className="text-xs text-cleo-charcoal/70">Overall</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="flex h-full flex-col gap-3 rounded-2xl border border-cleo-cocoa/40 bg-white p-5 shadow-sm"
          >
            <RatingStars rating={review.rating} />
            <div>
              <h3 className="font-heading text-xl font-semibold text-cleo-charcoal">
                {review.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-cleo-charcoal/80">
                {review.text}
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between text-sm text-cleo-charcoal/80">
              <span className="font-ui font-semibold text-cleo-charcoal">
                {review.name}
              </span>
              <span className="rounded-full bg-cleo-clay/60 px-3 py-1 text-xs font-ui text-cleo-charcoal">
                {review.skinType}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
