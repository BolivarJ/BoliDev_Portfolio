import { ArrowRight, ExternalLink, Github } from "lucide-react"

const project = [
    {
        id: 1,
        title: "Shopping Cart",
        description: "A simple shopping cart application built with HTML/CSS, JavaScript and PHP",
        image: "/projects/Carrito.JPG",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 2,
        title: "Api Rick and Morty",
        description: "A simple application that consumes the Rick and Morty API to display characters",
        image: "/projects/apirick.JPG",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        demoUrl: "https://bolivarj.github.io/apirick/",
        githubUrl: "https://github.com/BolivarJ/portfolio",
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Feature <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.map((project, key) => (
                    <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {project.demoUrl ? (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    ) : (
                                        <span className="text-muted-foreground cursor-not-allowed opacity-50">
                                            <ExternalLink size={20} />
                                        </span>
                                    )}

                                    {project.githubUrl ? (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    ) : (
                                        <span className="text-muted-foreground cursor-not-allowed opacity-50">
                                            <Github size={20} />
                                        </span>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/BolivarJ">
                    Check My GitHub <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}