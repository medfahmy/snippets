package com.mfahmy.snippetsapi.controller;

import com.mfahmy.snippetsapi.entity.Snippet;
import com.mfahmy.snippetsapi.repo.SnippetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class SnippetController {
    @Autowired
    SnippetRepo snippetRepo;

    @GetMapping("/snippet/{id}")
    public ResponseEntity<Snippet> getSnippet(@PathVariable Long id)  {
        return new ResponseEntity<Snippet>(snippetRepo.findById(id).get(), HttpStatus.OK);

    }

    @GetMapping("/snippet/all")
    public ResponseEntity<List<Snippet>> getAllSnippets() {
        return new ResponseEntity<List<Snippet>>(snippetRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping("/snippet")
    public ResponseEntity<Snippet> createSnippet(@RequestBody Snippet snippet) {
        return new ResponseEntity<Snippet>(snippetRepo.save(snippet),HttpStatus.CREATED);
    }

    @PutMapping("/snippet")
    public ResponseEntity<Snippet> updateSnippet(@RequestBody Snippet snippet) {
       return new ResponseEntity<Snippet>(snippetRepo.save(snippet),HttpStatus.OK);
    }

    @DeleteMapping("/snippet/{id}")
    public ResponseEntity<Snippet> deleteSnippet(@PathVariable Long id) {
        snippetRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
