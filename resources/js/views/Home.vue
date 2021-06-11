<template>
    <div class="mx-auto bg-gradient-to-b from-gray-800 to-blueGray-700">
    <section id="intro" class="py-40 bg-center" style="background-image: url('/img/home/round.jpg'); background-size: cover;">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap items-center px-6 sm:px-0">
                <div class="w-full sm:w-1/3 order-last sm:order-first">
                    <transition
                        appear
                        @before-enter="beforeSlide"
                        @enter="slide"
                    >
                        <img class=" h-36 w-auto mb-3" id="logo" src="/img/create.png" alt="Workflow" />
                    </transition>
                    <h1 class="text-5xl font-poppins font-bold mb-4 text-white">CreateWeb</h1>
                    <h4 class="text-xl mb-8 text-white">Realizzatori di sogni! Il tuo sito web è il tuo biglietto da visita, la prima cosa che le persone consultano dopo aver sentito parlare di te o della tua azienda.</h4>
                </div>
            </div>
        </div>
    </section>

    <section>

        <div class="overflow-hidden">
            <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
                <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-400 sm:text-4xl">LA NOSTRA MISSIONE</h3>
                    </div>
                </div>
                <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div class="relative lg:row-start-1 lg:col-start-2">
                        <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-teal-400" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <transition
                                        appear
                                        @before-enter="beforeEnter"
                                        @enter="enter"
                                    >
                                    <img class="rounded-lg shadow-lg object-cover object-center" src="/img/home/keepcalm.jpg" alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376" />
                                    </transition>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div class="mt-8 lg:mt-0">
                        <div class="text-base max-w-prose mx-auto lg:max-w-none">
                            <p class="text-lg text-white">Come appassionati di tecnologia, utilizziamo quotidianamente molti prodotti che amiamo. E mentre il confine tra un prodotto buono e uno cattivo è piuttosto sottile, la nostra esperienza ci ha mostrato che il lancio di un prodotto che gli utenti adoreranno richiede molto impegno e disciplina. La nostra missione è aiutarti a creare questo prodotto per un lancio di successo.</p>
                        </div>
                        <div class="mt-5 prose prose-indigo text-white mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                            <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p>Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start mt-10">
            <div class="relative sm:py-16 lg:py-0">
                <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                    <div class="absolute inset-y-0 right-1/2 w-full bg-yellow-600 rounded-r-3xl lg:right-72" />
                    <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                        <defs>
                            <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-yellow-600" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                    </svg>
                </div>
                <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                    <!-- Testimonial card-->
                    <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <img class="absolute inset-0 h-full w-full object-cover" src="/img/home/code.jpg" alt="" />
                        <div class="absolute inset-0" />
                        <div class="absolute inset-0 bg-gradient-to-t to-transparent from-indigo-600 opacity-90" />
                        <div class="relative px-8">

                            <blockquote class="mt-8">
                                <div class="relative text-lg font-medium text-white md:flex-grow">
                                    <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-yellow-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p class="relative">
                                        Per un architetto la libertà non è un grande regalo. Io ringrazio il cielo quando mi danno indicazioni precise: sono come i quadretti sul grande foglio bianco che è il progetto.
                                    </p>
                                </div>

                                <footer class="mt-4">
                                    <p class="text-base font-semibold text-indigo-200">Renzo Piano, Architetto</p>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <!-- Content area -->
                <div class="pt-12 sm:pt-16 lg:pt-20">
                    <h2 class="text-3xl text-yellow-600 font-extrabold tracking-tight sm:text-4xl">
                        INIZIA SENZA ATTESA
                    </h2>
                    <div class="mt-6 text-white space-y-6">
                        <p>
                            Mettere insieme un team di sviluppatori è lungo, costoso e difficile. Questo non è fatto alla leggera. Il nostro team è funzionale, esperto e pronto a iniziare rapidamente. Lanciare un buon prodotto significa anche cogliere l'opportunità di mercato al momento giusto. Lancia il tuo prodotto al momento giusto e prenditi il tempo necessario per costruire la tua squadra.
                        </p>
                        <p>
                            Di solito la prima cosa che si crea è la struttura del sito, il template di base delle varie pagine e gli elementi fondamentali: la struttura di navigazione, il footer, il socket, ecc. Questa struttura funge da modello per gran parte delle pagine di contenuto del vostro sito. Sarà compito del designer infatti prendere il contenuto e distribuirlo nelle aree appropriate.
                        </p>
                        <p>
                            Contestualmente a questa fase è quindi necessario lavorare sui contenuti da inserire all’interno del sito. La mappa del sito che abbiamo definito nella fase di progettazione rappresenta la traccia che dovremo seguire per la preparazione dei testi e delle immagini.
                        </p>
                    </div>
                </div>
            </div>
        </div>



        <div class="overflow-hidden mt-10">
            <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
                <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-500 sm:text-4xl">LA NOSTRA SQUADRA</h3>
                    </div>
                </div>
                <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div class="relative lg:row-start-1 lg:col-start-2">
                        <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-green-500" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <transition
                                        appear
                                        @before-enter="beforeEnter"
                                        @enter="enter"
                                    >
                                        <img class="rounded-lg shadow-lg object-cover object-center" src="/img/home/notes.jpg" alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376" />
                                    </transition>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div class="mt-8 lg:mt-0">
                        <div class="text-base max-w-prose mx-auto lg:max-w-none">
                            <p class="text-lg text-white">Il nostro team è composto da sviluppatori professionisti ed esperti. Negli anni abbiamo costruito una rete di partner che ci ha permesso di intraprendere progetti importanti. Grazie alla nostra passione per lo sviluppo, siamo in grado di realizzare tutti i tipi di progetti e affrontare nuove sfide.</p>
                        </div>
                        <div class="mt-5 prose prose-indigo text-white mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                            <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p>Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section id="testimonials" class="py-28 border-t">
        <div class="max-w-10xl mx-auto px-6 sm:px-0">
            <header class="text-center mb-16">
                <h2 class="leading-tight text-2xl sm:text-3xl font-bold mb-3">Ti aiutiamo in ogni fase del percorso seguendo <a href="https://agilemanifesto.org/iso/it/principles.html" class="text-teal-600">i principi sottostanti al Manifesto Agile.</a></h2>
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
                        </div>
                    </div>
                </div>
                <!--End testimonial-->
            </div>
        </div>
    </section>
    </div>
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

        const beforeSlide = (el) => {
            el.style.opacity = 0
            el.style.transform = 'translateY(400px)'
        }

        const slide = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                onComplete: done,
                delay: el.dataset.index * 0.2,
                rotation: 360,
            })
        }



        return { beforeEnter, enter, slide, beforeSlide}
    }
}
</script>
