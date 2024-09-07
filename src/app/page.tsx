import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ChevronRight, LightbulbIcon, PiggyBankIcon, TargetIcon } from "lucide-react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <Container component="div" maxWidth="lg" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box component="header" sx={{ py: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Image src="/dashboard/logo.png" alt="VANT Logo" width={120} height={40} />
        <nav>
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </Box>

      <Box component="main" sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Grid component="section" container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Manage Your Finances with AI
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mb: 4 }}>
              VANT uses cutting-edge AI to provide personalized financial insights, automate budgeting, and help you achieve your financial goals.
            </Typography>
            <Button size="lg" asChild>
              <Link href="/signup">
                Get Started <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src="/dashboard/dash.png" alt="VANT Dashboard Preview" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </Grid>
        </Grid>

        <Box component="section" sx={{ mt: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, fontSize: { xs: "1.75rem", md: "2.25rem" }, textAlign: "center" }}
          >
            Key Features
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: "AI-Powered Insights",
                description: "Get personalized financial advice based on your spending patterns.",
                icon: <LightbulbIcon className="h-6 w-6" aria-hidden="true" />,
              },
              {
                title: "Automated Budgeting",
                description: "Create and maintain budgets effortlessly with AI assistance.",
                icon: <PiggyBankIcon className="h-6 w-6" aria-hidden="true" />,
              },
              {
                title: "Goal Tracking",
                description: "Set financial goals and track your progress with AI-driven recommendations.",
                icon: <TargetIcon className="h-6 w-6" aria-hidden="true" />,
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {feature.icon}
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box component="footer" sx={{ py: 4, display: "flex", justifyContent: "center", gap: 4 }}>
        <Link href="/about" passHref>
          <Typography component="a" variant="body2" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            About Us
          </Typography>
        </Link>
        <Link href="/privacy" passHref>
          <Typography component="a" variant="body2" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            Privacy Policy
          </Typography>
        </Link>
        <Link href="/terms" passHref>
          <Typography component="a" variant="body2" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            Terms of Service
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}
