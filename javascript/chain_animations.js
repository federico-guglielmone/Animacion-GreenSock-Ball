gsap
    .timeline({
        defaults:{
            duration:2,
            delay:0.5,
            repeat:-1,
            yoyo:true,
        }
    })
    .to(`.ball`,{
        duration:1,
        x: `50vw`,
        scale:  2,
        rotation: 180,
        backgroundColor: `#f3f`,
        borderRadius:`50%`,
        ease:`bounce.out`,
    })
    .to(`.ball`,{
        duration:1,
        x: `80vw`,
        scale:  1,
        rotation: 180,
        backgroundColor: `#fffff`,
        borderRadius:`50%`,
        ease:`bounce.out`,
    })
    