import React, { useEffect } from "react";
import KUTE from "kute.js";

function Wavesanimation() {
  useEffect(() => {
    const tween1 = KUTE.fromTo(
      "#wave1-1",
      { path: "#wave1-1" },
      { path: "#wave2-1" },
      { repeat: 999, duration: 9000, yoyo: true }
    );
    const tween2 = KUTE.fromTo(
      "#wave1-2",
      { path: "#wave1-2" },
      { path: "#wave2-2" },
      { repeat: 999, duration: 9000, yoyo: true }
    );
    const tween3 = KUTE.fromTo(
      "#wave1-3",
      { path: "#wave1-3" },
      { path: "#wave2-3" },
      { repeat: 999, duration: 9000, yoyo: true }
    );
    const tween4 = KUTE.fromTo(
      "#wave1-4",
      { path: "#wave1-4" },
      { path: "#wave2-4" },
      { repeat: 999, duration: 9000, yoyo: true }
    );
    const tween5 = KUTE.fromTo(
      "#wave1-5",
      { path: "#wave1-5" },
      { path: "#wave2-5" },
      { repeat: 999, duration: 9000, yoyo: true }
    );
    tween1.start();
    tween2.start();
    tween3.start();
    tween4.start();
    tween5.start();
  }, []);
  return (
    <div className="absolute flex items-stretch m-0 p-0  w-max bottom-0 bg-transparent z-0 ">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="1920"
        height="1080"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g>
          <path
            id="wave1-1"
            d="M0 361L21.5 363.8C43 366.7 86 372.3 128.8 381.7C171.7 391 214.3 404 257.2 409.7C300 415.3 343 413.7 385.8 409.7C428.7 405.7 471.3 399.3 514.2 390.3C557 381.3 600 369.7 642.8 375.5C685.7 381.3 728.3 404.7 771.2 411.5C814 418.3 857 408.7 878.5 403.8L900 399L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#fa7268"
          ></path>
          <path
            id="wave1-2"
            d="M0 406L21.5 416.5C43 427 86 448 128.8 456.8C171.7 465.7 214.3 462.3 257.2 463C300 463.7 343 468.3 385.8 458.7C428.7 449 471.3 425 514.2 423.7C557 422.3 600 443.7 642.8 445.3C685.7 447 728.3 429 771.2 428.3C814 427.7 857 444.3 878.5 452.7L900 461L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#ef5f67"
          ></path>
          <path
            id="wave1-3"
            d="M0 495L21.5 492.2C43 489.3 86 483.7 128.8 482.3C171.7 481 214.3 484 257.2 484.7C300 485.3 343 483.7 385.8 475.5C428.7 467.3 471.3 452.7 514.2 456.7C557 460.7 600 483.3 642.8 495.2C685.7 507 728.3 508 771.2 501.2C814 494.3 857 479.7 878.5 472.3L900 465L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#e34c67"
          ></path>
          <path
            id="wave1-4"
            d="M0 497L21.5 494.5C43 492 86 487 128.8 493.8C171.7 500.7 214.3 519.3 257.2 528.8C300 538.3 343 538.7 385.8 537.5C428.7 536.3 471.3 533.7 514.2 531.8C557 530 600 529 642.8 523.3C685.7 517.7 728.3 507.3 771.2 508.3C814 509.3 857 521.7 878.5 527.8L900 534L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#d53867"
          ></path>
          <path
            id="wave1-5"
            d="M0 543L21.5 540.2C43 537.3 86 531.7 128.8 531.5C171.7 531.3 214.3 536.7 257.2 541.5C300 546.3 343 550.7 385.8 550.7C428.7 550.7 471.3 546.3 514.2 548.3C557 550.3 600 558.7 642.8 560.2C685.7 561.7 728.3 556.3 771.2 556C814 555.7 857 560.3 878.5 562.7L900 565L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#c62368"
          ></path>
        </g>
        <g className="hidden">
          <path
            id="wave2-1"
            d="M0 389L21.5 386.3C43 383.7 86 378.3 128.8 379C171.7 379.7 214.3 386.3 257.2 398.7C300 411 343 429 385.8 429C428.7 429 471.3 411 514.2 405.5C557 400 600 407 642.8 416.3C685.7 425.7 728.3 437.3 771.2 441.8C814 446.3 857 443.7 878.5 442.3L900 441L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#fa7268"
          ></path>
          <path
            id="wave2-2"
            d="M0 396L21.5 400.5C43 405 86 414 128.8 424.3C171.7 434.7 214.3 446.3 257.2 446.3C300 446.3 343 434.7 385.8 437.2C428.7 439.7 471.3 456.3 514.2 464C557 471.7 600 470.3 642.8 458.5C685.7 446.7 728.3 424.3 771.2 418.5C814 412.7 857 423.3 878.5 428.7L900 434L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#ef5f67"
          ></path>
          <path
            id="wave2-3"
            d="M0 463L21.5 468.2C43 473.3 86 483.7 128.8 485.2C171.7 486.7 214.3 479.3 257.2 473.5C300 467.7 343 463.3 385.8 457.8C428.7 452.3 471.3 445.7 514.2 450.8C557 456 600 473 642.8 473.3C685.7 473.7 728.3 457.3 771.2 449C814 440.7 857 440.3 878.5 440.2L900 440L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#e34c67"
          ></path>
          <path
            id="wave2-4"
            d="M0 542L21.5 539.2C43 536.3 86 530.7 128.8 521C171.7 511.3 214.3 497.7 257.2 492.7C300 487.7 343 491.3 385.8 495.2C428.7 499 471.3 503 514.2 504.7C557 506.3 600 505.7 642.8 503.8C685.7 502 728.3 499 771.2 500.8C814 502.7 857 509.3 878.5 512.7L900 516L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#d53867"
          ></path>
          <path
            id="wave2-5"
            d="M0 543L21.5 546.2C43 549.3 86 555.7 128.8 553.8C171.7 552 214.3 542 257.2 539.7C300 537.3 343 542.7 385.8 541.8C428.7 541 471.3 534 514.2 531.8C557 529.7 600 532.3 642.8 533.7C685.7 535 728.3 535 771.2 540.2C814 545.3 857 555.7 878.5 560.8L900 566L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#c62368"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default Wavesanimation;
