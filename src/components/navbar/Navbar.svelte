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
            isMenuOpen = false; // Close menu after clicking
        }
    }

    const menu = [
        { id: "service", name: "Service" },
        { id: "work", name: "Work" },
        { id: "about", name: "About" },
        { id: "contact", name: "Contact" },
    ];

    import logo from "../../assets/logo.png";
</script>

<div class="flex justify-between items-center py-4">
    <!-- Left side navbar -->
    <div>
        <button type="button" on:click={() => scrollToSection("home")}>
            Masjidul
        </button>
    </div>

    <!-- Mobile Toggle Button -->
    <button
        on:click={toggleMenu}
        class="lg:hidden btn btn-square btn-ghost"
        aria-label="Toggle menu"
    >
        {#if !isMenuOpen}
            ☰
        {/if}
    </button>

    <!-- Right side navbar (Desktop) -->
    <div class="hidden lg:block">
        <ul class="flex space-x-12 text-black font-medium uppercase">
            {#each menu as item}
                <li>
                    <button
                        type="button"
                        on:click={() => scrollToSection(item.id)}
                        class="nav-link"
                    >
                        {item.name}
                    </button>
                </li>
            {/each}
        </ul>
    </div>

    <div class="hidden lg:block">
        <a
            href="/"
            class="bg-blue-700 px-5 py-2 rounded-3xl text-white font-medium"
        >
            Let's Talk
        </a>
    </div>
</div>

<!-- Mobile Menu -->
{#if isMenuOpen}
    <div
        transition:fly={{ x: 100, y: 0, duration: 300 }}
        class="lg:hidden fixed top-16 right-4 bg-white w-56 p-4 rounded-lg shadow-lg"
    >
        <button
            on:click={toggleMenu}
            class="block w-full text-right text-red-600 font-bold text-2xl"
            >x</button
        >
        <ul class="space-y-4 text-left">
            {#each menu as item}
                <li>
                    <button
                        type="button"
                        on:click={() => scrollToSection(item.id)}
                        class="nav-link"
                    >
                        {item.name}
                    </button>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>
    .nav-link {
        text-transform: uppercase !important;
    }
</style>
