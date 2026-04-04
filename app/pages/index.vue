<template>
    <div>
        <AppHeader />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UseCasesSection />
        <FeaturesSection />
        <PricingSection />
        <HowToSection />
        <TargetSection />
        <PrivacySection />
        <CtaSection />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
});
</script>
