import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 0,
      anchorPlacement: "top-bottom",
    });

    // 路由變化時重新初始化 AOS
    const router = useRouter();
    router.afterEach(() => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }
});
