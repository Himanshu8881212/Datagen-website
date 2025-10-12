import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="dynamic-container relative">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-[700px] mx-auto md:text-lg">
              Pay only for what you use with our credit-based system. No subscriptions, no hidden fees.
            </p>
          </div>

          {/* Free Monthly Credits Banner */}
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Get 1,000 Free Credits Every Month!</h3>
                  <p className="text-muted-foreground">
                    Start generating data immediately with our monthly free credits. No credit card required.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg whitespace-nowrap">
                    ₹50 Value
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Packages */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Starter Package */}
            <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/20">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Starter</h3>
                <p className="text-sm text-muted-foreground">For small projects</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">₹1,500</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">30,000 credits</div>
              <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
              <ul className="mt-4 space-y-3 text-sm flex-1">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>30,000 rows of text/tabular data</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>3,000 images</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>₹0.05 per credit</span>
                </li>
              </ul>
            </div>

            {/* Popular Package */}
            <div className="flex flex-col rounded-xl border-2 border-primary bg-card p-6 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Popular</h3>
                <p className="text-sm text-muted-foreground">Most chosen option</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">₹3,000</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">60,000 credits</div>
              <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
              <ul className="mt-4 space-y-3 text-sm flex-1">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>60,000 rows of text/tabular data</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>6,000 images</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>₹0.05 per credit</span>
                </li>
              </ul>
            </div>

            {/* Pro Package */}
            <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/20">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Pro</h3>
                <p className="text-sm text-muted-foreground">For professionals</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">₹6,000</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">120,000 credits</div>
              <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
              <ul className="mt-4 space-y-3 text-sm flex-1">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>120,000 rows of text/tabular data</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>12,000 images</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>₹0.05 per credit</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Package */}
            <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/20">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Enterprise</h3>
                <p className="text-sm text-muted-foreground">For large teams</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">₹10,000</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">200,000 credits</div>
              <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
              <ul className="mt-4 space-y-3 text-sm flex-1">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>200,000 rows of text/tabular data</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>20,000 images</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>₹0.05 per credit</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How Credits Work */}
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold mb-6 text-center">How Credits Work</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Text, Tabular & Time-Series</p>
                      <p className="text-sm text-muted-foreground">1 credit per row generated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Image Generation</p>
                      <p className="text-sm text-muted-foreground">10 credits per image generated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Monthly Free Credits</p>
                      <p className="text-sm text-muted-foreground">1,000 credits every month (₹50 value)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">No Subscriptions</p>
                      <p className="text-sm text-muted-foreground">One-time purchases, credits never expire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Unlimited Everything</p>
                      <p className="text-sm text-muted-foreground">Unlimited dataspaces, datasets & storage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Custom Amounts</p>
                      <p className="text-sm text-muted-foreground">Buy any amount from ₹100 to ₹1,00,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 text-white px-8"
            >
              <Link href="/trysynthengyne">
                Start with Free Credits
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • 1,000 free credits every month
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

