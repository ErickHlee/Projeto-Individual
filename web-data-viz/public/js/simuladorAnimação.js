const tempo1 = gsap.timeline();

    tempo1.from(".header", {
        y: -100,
        delay: 0.3
    })

    tempo1.from(".title", {
        y: -50,
        opacity: 0
    });

    tempo1.from(".voltar", {
        y: -50,
        opacity: 0
    });

    tempo1.from("body", {
        backdropFilter: "blur(0px)"
    });

    tempo1.from(".bg-image", {
        position: "absolute"
    });

    tempo1.from(".box", {
        y: 250,
        opacity: 0
    });

    tempo1.from(".calculadora button", {
        y: -50,
        opacity: 0
    });


    document.getElementById("resultado").addEventListener("click", () => {
        gsap.from(".resultado", {
            x: 50,
            opacity: 0
        });
    });
