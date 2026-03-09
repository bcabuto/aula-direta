export interface Testimonial {
  name: string;
  course: string;
  image: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Silva",
    course: "Técnico em Enfermagem",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "A Aula Direta mudou minha vida! Consegui conciliar os estudos com o trabalho graças à modalidade EAD. Hoje atuo em um hospital renomado e sou muito grata pela formação que recebi.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo Santos",
    course: "Técnico em Desenvolvimento de Sistemas",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "O curso de Desenvolvimento de Sistemas superou minhas expectativas. Os professores são excelentes e o conteúdo é muito atualizado. Já estou trabalhando na área antes mesmo de concluir o curso!",
    rating: 5,
  },
  {
    name: "Ana Beatriz Oliveira",
    course: "Técnico em Administração",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Escolhi a Aula Direta pela credibilidade e qualidade do ensino e não me arrependi. O material é excelente e o suporte ao aluno é excepcional. Recomendo a todos!",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    course: "Técnico em Segurança do Trabalho",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Fiz o técnico em Segurança do Trabalho e foi a melhor decisão da minha carreira. Em poucos meses após a formação já estava empregado com um excelente salário.",
    rating: 4,
  },
  {
    name: "Fernanda Costa",
    course: "Técnico em Farmácia",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    text: "A plataforma é muito intuitiva e as aulas são dinâmicas. Consegui minha certificação sem sair de casa e hoje trabalho em uma grande rede de farmácias.",
    rating: 5,
  },
  {
    name: "Lucas Pereira",
    course: "Técnico em Redes de Computadores",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "Conteúdo prático e professores que realmente entendem do mercado. O curso me deu a base que eu precisava para trabalhar com infraestrutura de TI.",
    rating: 5,
  },
];
