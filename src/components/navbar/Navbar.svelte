<script lang="ts">
    import { fly } from "svelte/transition";

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            isMenuOpen = false;
        }
    }

    const menu = [
        { id: "service", name: "Service" },
        { id: "work", name: "Work" },
        { id: "about", name: "About" },
        { id: "contact", name: "Contact" },
    ];
</script>

<!-- Desktop Navbar: 1920x110 | pad T:32 R:370 B:32 L:370 | bg:#FFFFFF -->
<nav class="hidden lg:flex justify-between items-center h-[110px] px-6 2xl:px-[370px] bg-white">
    <!-- Logo -->
    <button type="button" on:click={() => scrollToSection("home")}>
        <img src="/logo.svg" alt="Barrzen logo" class="h-[55px] w-auto" />
    </button>

    <!-- Nav links: HORIZONTAL gap:32 | Geist 18px/500 #1A1A1A UPPERCASE -->
    <ul class="flex items-center gap-8">
        {#each menu as item}
            <li>
                <button
                    type="button"
                    on:click={() => scrollToSection(item.id)}
                    class="text-[18px] font-medium leading-[23.4px] text-[#1A1A1A] uppercase hover:text-[#2966F4] transition-colors"
                >
                    {item.name}
                </button>
            </li>
        {/each}
    </ul>

    <!-- CTA: 196x50 | bg:#2966F4 | radius:100 | pad T:10 R:20 B:10 L:20 | Geist 18px/500 #FFFFFF -->
    <a
        href="#contact"
        class="inline-flex items-center gap-1 bg-[#2966F4] text-white text-[18px] font-medium leading-[23.4px] px-5 py-[10px] rounded-full hover:bg-[#1d50d4] transition-colors"
        style="height:50px;"
    >
        Let's talk
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
</nav>

<!-- Mobile Navbar -->
<nav class="lg:hidden flex justify-between items-center h-[70px] px-6 bg-white">
    <button type="button" on:click={() => scrollToSection("home")}>
        <img src="/logo.svg" alt="Barrzen logo" class="h-8 w-auto" />
    </button>
    <button
        on:click={toggleMenu}
        class="text-[#1A1A1A] p-2"
        aria-label="Toggle menu"
    >
        {#if isMenuOpen}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        {:else}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></svg>
        {/if}
    </button>
</nav>

{#if isMenuOpen}
    <div
        transition:fly={{ y: -10, duration: 200 }}
        class="lg:hidden fixed top-[70px] left-0 right-0 bg-white border-b border-[#EBEBEB] px-6 py-6 z-50 shadow-lg"
    >
        <ul class="flex flex-col gap-6">
            {#each menu as item}
                <li>
                    <button
                        type="button"
                        on:click={() => scrollToSection(item.id)}
                        class="text-[18px] font-medium text-[#1A1A1A] uppercase w-full text-left"
                    >
                        {item.name}
                    </button>
                </li>
            {/each}
        </ul>
        <a
            href="#contact"
            class="mt-6 inline-flex items-center gap-2 bg-[#2966F4] text-white text-[16px] font-medium px-5 py-3 rounded-full"
        >
            Let's talk
        </a>
    </div>
{/if}
