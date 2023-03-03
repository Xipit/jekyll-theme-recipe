# frozen_string_literal: true

Gem::Specification.new do |s|
    s.name          = "jekyll-theme-recipe"
    s.version       = "0.1.2"
    s.license       = "CC0-1.0"
    s.authors       = ["Hanno Witzleb"]
    s.email         = []
    s.homepage      = "https://github.com/Xipit/jekyll-theme-recipe"
    s.summary       = "Recipe is a Jekyll theme for recipe websites, and adapted from CloudCannons Treat theme"
  
    s.files         = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
    end
  
    s.required_ruby_version = ">= 2.4.0"
  
    s.platform = Gem::Platform::RUBY
    s.add_runtime_dependency "jekyll", "> 3.5", "< 5.0"
    s.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
    s.add_runtime_dependency "jekyll-feed", "0.17.0"
    s.add_runtime_dependency "jekyll-paginate", "1.1.0"
    s.add_runtime_dependency "jekyll-sitemap", "1.4.0"
    s.add_development_dependency "html-proofer", "~> 3.0"
    s.add_development_dependency "rubocop-github", "~> 0.16"
    s.add_development_dependency "w3c_validators", "~> 1.3"
  end