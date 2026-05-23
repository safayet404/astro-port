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
<nav
    class="hidden lg:flex justify-between items-center h-27.5 px-6 2xl:px-92.5 bg-white"
>
    <!-- Logo -->
    <button type="button" on:click={() => scrollToSection("home")}>
        <img src="/logo.svg" alt="Barrzen logo" class="h-13.75 w-auto" />
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
        class="inline-flex justify-center items-center gap-1 w-49 h-12.5 bg-[#2966F4] text-white text-[18px] font-medium leading-[23.4px] px-5 py-2.5 rounded-full hover:bg-[#1d50d4] shadow-2xl shadow-black transition-colors"
    >
        Let's talk
        <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> -->
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_1_585)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.1809 4.40601C18.1837 4.40318 18.1866 4.40028 18.1895 4.39746L19.6037 5.81174L19.5742 5.8413C16.1971 9.24623 16.3687 13.8904 18.543 16.0647L17.1288 17.4789C15.361 15.7111 14.6473 13.04 15.0895 10.326L5.81517 19.6003L4.40095 18.1861L13.6754 8.91163C10.9613 9.35391 8.29005 8.64018 6.5222 6.87233L7.93642 5.45812C10.1151 7.63684 14.7741 7.80472 18.1809 4.40601Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_585">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </a>
</nav>

<!-- Mobile Navbar -->
<nav class="lg:hidden flex justify-between items-center h-17.5 px-6 bg-white">
    <button type="button" on:click={() => scrollToSection("home")}>
        <img src="/logo.svg" alt="Barrzen logo" class="h-8 w-auto" />
    </button>
    <button
        on:click={toggleMenu}
        class="text-[#1A1A1A] p-2"
        aria-label="Toggle menu"
    >
        {#if isMenuOpen}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                ><line x1="18" y1="6" x2="6" y2="18" /><line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                /></svg
            >
        {:else}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                ><line x1="3" y1="8" x2="21" y2="8" /><line
                    x1="3"
                    y1="16"
                    x2="21"
                    y2="16"
                /></svg
            >
        {/if}
    </button>
</nav>

{#if isMenuOpen}
    <div
        transition:fly={{ y: -10, duration: 200 }}
        class="lg:hidden fixed top-17.5 left-0 right-0 bg-white border-b border-[#EBEBEB] px-6 py-6 z-50 shadow-lg"
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
