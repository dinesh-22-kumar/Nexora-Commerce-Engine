package com.nexora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty() && !category.equalsIgnoreCase("All Gear")) {
            return productRepository.findByCategory(category);
        }
        return productRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product saved = productRepository.save(product);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return ResponseEntity.ok("Deleted successfully");
    }
}