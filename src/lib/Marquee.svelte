<div class="marquee">
  <div class="marquee__inner" aria-hidden="true">
    <span>Lorem</span>
    <span>consectetur</span>
    <span>Lorem</span>
    <span>consectetur</span>
    <span>Lorem</span>
    <span>consectetur</span>
    <span>Lorem</span>
    <span>consectetur</span>

   <span>Lorem</span>
    <span>consectetur</span>
    <span>Lorem</span>
    <span>consectetur</span>
    <span>Lorem</span>
    <span>consectetur</span>
    <span>Lorem</span>
    <span>consectetur</span>
  </div>
</div>

<style>
  .marquee {
    position: relative;
    overflow: hidden;
    --offset: 30vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));
  }

  .marquee__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 8s linear infinite;
    animation-play-state: running;
  }

  .marquee span {
    font-size: 1vw;
    padding: 0 1vw;
  }

  .marquee:hover .marquee__inner {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }
</style>
