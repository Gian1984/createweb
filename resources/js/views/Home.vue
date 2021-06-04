<template>
    <section id="intro" class="py-40" style="background-image: url('/img/home/wall.jpg'); background-size: cover;">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap items-center px-6 sm:px-0">
                <div class="w-full sm:w-1/3 order-last sm:order-first">
                    <h1 class="text-5xl font-poppins font-bold mb-4 text-white">CreateWeb</h1>
                    <h4 class="text-xl mb-8 text-white">Realizzatori di sogni! Il tuo sito web è il tuo biglietto da visita, la prima cosa che le persone consultano dopo aver sentito parlare di te o della tua azienda.</h4>
                </div>
            </div>
        </div>
    </section>
    <section id="how-to" class="py-16 ">
        <div class="max-w-10xl mx-auto px-6 sm:px-0">
            <header class="text-center mb-16">
                <img class="mx-auto h-36 w-auto" src="/img/create.png" alt="Workflow" />
                <h2 class="leading-tight text-3xl sm:text-4xl font-bold mb-3 text-green-500">CreateWeb</h2>
                <h4 class="leading-tight text-xl text-white mb-4">Sviluppo di prodotti digitali per startup e aziende innovative.</h4>
            </header>
            <div class="flex flex-wrap items-center justify-between">
                <div class="w-full sm:w-1/2 order-last sm:order-first">
                    <h1 class="text-4xl font-poppins font-bold mb-4 mx-10 mt-4">LA NOSTRA MISSIONE</h1>
                    <p class="text-white text-xl mx-10">Come appassionati di tecnologia, utilizziamo quotidianamente molti prodotti che amiamo. E mentre il confine tra un prodotto buono e uno cattivo è piuttosto sottile, la nostra esperienza ci ha mostrato che il lancio di un prodotto che gli utenti adoreranno richiede molto impegno e disciplina. La nostra missione è aiutarti a creare questo prodotto per un lancio di successo.</p>
                </div>
                <div class="w-full sm:w-1/2 flex justify-center">
                    <transition
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                    >
                    <img class="w-4/5" src="/img/home/keepcalm.jpg">
                    </transition>
                </div>
            </div>
            <div class="flex flex-wrap items-center justify-between mt-20">
                <div class="w-full sm:w-1/2 order-last">
                    <h1 class="text-3xl font-poppins font-bold mb-4 mx-10 mt-4">INIZIA SENZA ATTESA</h1>
                    <p class="text-white text-xl mx-10">Mettere insieme un team di sviluppatori è lungo, costoso e difficile. Questo non è fatto alla leggera. Il nostro team è funzionale, esperto e pronto a iniziare rapidamente. Lanciare un buon prodotto significa anche cogliere l'opportunità di mercato al momento giusto. Lancia il tuo prodotto al momento giusto e prenditi il tempo necessario per costruire la tua squadra.</p>
                </div>
                <div class="w-full sm:w-1/2 flex justify-center">
                    <img class="w-4/5" src="/img/home/code.jpg">
                </div>
            </div>
            <div class="flex flex-wrap items-center justify-between mt-20">
                <div class="w-full sm:w-1/2 order-last sm:order-first">
                    <h1 class="text-3xl font-poppins font-bold mb-4 mx-10 mt-4">LA NOSTRA SQUADRA</h1>
                    <p class="text-white text-xl mx-10">Il nostro team è composto da sviluppatori professionisti ed esperti. Negli anni abbiamo costruito una rete di partner che ci ha permesso di intraprendere progetti importanti. Grazie alla nostra passione per lo sviluppo, siamo in grado di realizzare tutti i tipi di progetti e affrontare nuove sfide.</p>
                </div>
                <div class="w-full sm:w-1/2 flex justify-center">
                    <img class="w-4/5" src="/img/home/notes.jpg">
                </div>
            </div>
        </div>
    </section>
    <section id="testimonials" class="py-28 border-t">
        <div class="max-w-10xl mx-auto px-6 sm:px-0">
            <header class="text-center mb-16">
                <h2 class="leading-tight text-2xl sm:text-3xl font-bold mb-3">Ti aiutiamo in ogni fase del percorso seguendo <a href="https://agilemanifesto.org/iso/it/principles.html" class="text-green-600">i principi sottostanti al Manifesto Agile.</a></h2>
                <h4 class="leading-tight text-xl text-gray-500">La nostra massima priorità è soddisfare il cliente rilasciando software di valore, fin da subito e in maniera continua.</h4>
            </header>
            <div class="flex flex-wrap items-center justify-between">
                <!--Begin testimonial-->
                <div class="w-full sm:w-1/2 md:w-1/3 p-2">
                    <div class="rounded">
                        <img src="/img/home/eyes.jpg" class="rounded-t">
                        <div class="p-6 border rounded-b text-center">
                            <p class="font-bold text-lg mb-1">Roadmap del prodotto</p>
                            <p class="text-gray-600 italic mb-4">Per definire la visione di un prodotto o servizio, ci prendiamo il tempo per ascoltarti e comprendere le tue esigenze e quelle dei tuoi clienti. Scriviamo un documento con le specifiche tecniche, alcuni mockup, un programma e una stima del budget.</p>
                            <p class="font-bold text-gray-600 text-sm">Photographer / Film maker</p>
                        </div>
                    </div>
                </div>
                <!--End testimonial-->

                <!--Begin testimonial-->
                <div class="w-full sm:w-1/2 md:w-1/3 p-2">
                    <div class="rounded">
                        <img src="/img/home/elvis.jpg" class="rounded-t">
                        <div class="p-6 border rounded-b text-center">
                            <p class="font-bold text-lg mb-1">Prototipazione</p>
                            <p class="text-gray-600 italic mb-4">Prima di investire più tempo e denaro in un progetto, a volte è utile convalidare le ipotesi o chiudere le porte per rifocalizzare meglio. Crea una demo interattiva, convalida l'interesse dei tuoi utenti o testa una tecnologia.</p>
                            <p class="font-bold text-gray-600 text-sm">Freelance Photographer</p>
                        </div>
                    </div>
                </div>
                <!--End testimonial-->

                <!--Begin testimonial-->
                <div class="w-full sm:w-1/2 md:w-1/3 p-2">
                    <div class="rounded">
                        <img src="/img/home/thisistheplace.jpg" class="rounded-t">
                        <div class="p-6 border rounded-b text-center">
                            <p class="font-bold text-lg mb-1">Sviluppo completo</p>
                            <p class="text-gray-600 italic mb-4">Hai la visione, senti la trazione e tutto ciò di cui hai bisogno è il software? Il nostro team lavorerà con te per sviluppare questo nuovo prodotto funzionale e di design che i tuoi clienti adoreranno usare. E ti aiuteremo a iniziare.</p>
                            <p class="font-bold text-gray-600 text-sm">Freelance Film maker</p>
                        </div>
                    </div>
                </div>
                <!--End testimonial-->
            </div>
        </div>
    </section>
</template>

<script>

import gsap from 'gsap'

export default {

    setup() {
        const beforeEnter = (el) => {
            el.style.opacity = 0
            el.style.transform = 'translateX(400px)'
        }
        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 1.5,
                onComplete: done,
                delay: el.dataset.index * 0.2
            })
        }
        return { beforeEnter, enter}
    }
}
</script>
