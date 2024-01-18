const typeitInstance = new TypeIt("#herotext", {
  strings: [
    "Empowering your digital world with innovative solutions.",
    "We specialize in delivering cutting-edge software solutions to meet your business needs.",
  ],
  speed: 75,
  breakLines: false, // Disable line breaks to type each string without interruption
  waitUntilVisible: true, // Wait until the element is visible before starting
  loop: true,
});

typeitInstance.go();
