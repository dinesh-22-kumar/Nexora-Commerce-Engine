package com.nexora;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProductRepository repo;

    public DataInitializer(ProductRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        if (repo.count() == 0) {
            repo.saveAll(Arrays.asList(
                // Keyboards
                new Product("Keychron K2 Pro Wireless", "Keyboards", 8499.0, 14, "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"),
                new Product("Akko 3068B Plus Retro", "Keyboards", 6299.0, 9, "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80"),
                new Product("Logitech G Pro X TKL", "Keyboards", 11499.0, 5, "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80"),
                new Product("Royal Kludge RK61 RGB", "Keyboards", 3899.0, 22, "https://images.unsplash.com/photo-1541140532154-b024d705b909?auto=format&fit=crop&w=600&q=80"),

                // Gaming Mice
                new Product("Logitech G Pro X Superlight", "Gaming Mice", 10999.0, 12, "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80"),
                new Product("Razer DeathAdder V3 Pro", "Gaming Mice", 12499.0, 8, "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80"),
                new Product("Logitech MX Master 3S", "Gaming Mice", 8995.0, 18, "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?auto=format&fit=crop&w=600&q=80"),
                new Product("Glorious Model O Wireless", "Gaming Mice", 5999.0, 11, "https://images.unsplash.com/photo-1626218174358-7769486c4b79?auto=format&fit=crop&w=600&q=80"),

                // Headsets
                new Product("Sony WH-1000XM5 Wireless", "Headsets", 29990.0, 6, "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"),
                new Product("HyperX Cloud II Wireless", "Headsets", 9490.0, 15, "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"),
                new Product("Audio-Technica ATH-M50xBT2", "Headsets", 15999.0, 7, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"),
                new Product("SteelSeries Arctis Nova 7", "Headsets", 16499.0, 4, "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80"),

                // Monitors
                new Product("LG UltraGear 27'' QHD 165Hz", "Monitors", 24999.0, 10, "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"),
                new Product("Samsung Odyssey G7 32'' Curved", "Monitors", 43999.0, 3, "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&w=600&q=80"),
                new Product("BenQ MOBIUZ EX2710Q 1440p", "Monitors", 27490.0, 8, "https://images.unsplash.com/photo-1585792180666-f7547cb6a25c?auto=format&fit=crop&w=600&q=80"),
                new Product("Dell UltraSharp 32'' 4K Hub", "Monitors", 68900.0, 2, "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80"),

                // Desk Gear
                new Product("Grovemade Wool Felt Desk Pad", "Desk Gear", 3499.0, 25, "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80"),
                new Product("BenQ ScreenBar Monitor Light", "Desk Gear", 9990.0, 12, "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"),
                new Product("Ergonomic Aluminium Laptop Stand", "Desk Gear", 1899.0, 30, "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"),
                new Product("Elgato Stream Deck MK.2", "Desk Gear", 13999.0, 7, "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80")
            ));
            System.out.println(">>> 20 Tech Products added to database! <<<");
        }
    }
}