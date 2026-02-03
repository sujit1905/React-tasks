import Card from "./components/Card";

function App() {
  const users = [
    {
      id: 1,
      availability: "available",
      pricePerHour: 25,
      image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sujit Mecwan",
      profession: "UI/UX Designer",
      skills: ["UI", "UX", "Photoshop"],
      extraSkillsCount: 4,
      info: "Creative UI/UX designer focused on clean and user-friendly interfaces.",
    },
    {
      id: 2,
      availability: null,
      pricePerHour: 30,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ananya Patel",
      profession: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript"],
      extraSkillsCount: 5,
      info: "Frontend developer with strong experience in responsive web design.",
    },
    {
      id: 3,
      availability: "available",
      pricePerHour: 20,
      image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rohit Sharma",
      profession: "Graphic Designer",
      skills: ["Illustrator", "Photoshop", "Branding"],
      extraSkillsCount: 3,
      info: "Passionate graphic designer creating modern visual identities.",
    },
    {
      id: 4,
      availability: "available",
      pricePerHour: 40,
      image: "https://plus.unsplash.com/premium_photo-1763120206775-2d6ece46fe49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Neha Verma",
      profession: "Product Designer",
      skills: ["UX Research", "Wireframing", "Figma"],
      extraSkillsCount: 6,
      info: "Product designer experienced in end-to-end product design.",
    },
    {
      id: 5,
      availability: "not-available",
      pricePerHour: 35,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aman Joshi",
      profession: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB"],
      extraSkillsCount: 7,
      info: "Full stack developer building scalable web applications.",
    },
    {
      id: 6,
      availability: "available",
      pricePerHour: 18,
      image: "https://images.unsplash.com/photo-1545566071-5721f3acedb3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pooja Singh",
      profession: "Content Writer",
      skills: ["SEO", "Blog Writing", "Copywriting"],
      extraSkillsCount: 4,
      info: "Content writer specializing in SEO-friendly articles.",
    },
    {
      id: 7,
      availability: "available",
      pricePerHour: 28,
      image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Karan Mehta",
      profession: "Mobile App Developer",
      skills: ["Flutter", "Dart", "Firebase"],
      extraSkillsCount: 5,
      info: "Mobile app developer creating smooth cross-platform apps.",
    },
    {
      id: 8,
      availability: "not-available",
      pricePerHour: 22,
      image: "https://plus.unsplash.com/premium_photo-1689708385255-fe5ee98674ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sneha Kulkarni",
      profession: "UI Designer",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      extraSkillsCount: 3,
      info: "UI designer with a strong eye for modern design trends.",
    },
    {
      id: 9,
      availability: "available",
      pricePerHour: 45,
      image: "https://plus.unsplash.com/premium_photo-1689564003745-946f35267ffe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Vikas Rao",
      profession: "DevOps Engineer",
      skills: ["AWS", "Docker", "CI/CD"],
      extraSkillsCount: 6,
      info: "DevOps engineer automating deployments and infrastructure.",
    },
    {
      id: 10,
      availability: "available",
      pricePerHour: 15,
      image: "https://plus.unsplash.com/premium_photo-1758836218266-2ba84a1607ee?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Riya Malhotra",
      profession: "Junior UI Designer",
      skills: ["UI", "Canva", "Design Basics"],
      extraSkillsCount: 2,
      info: "Junior designer eager to learn and grow in UI design.",
    },
  ];

  return (
  <div className="cards">
    {users.map((user) => (
      <Card
        key={user.id}
        availability={user.availability}
        pricePerHour={user.pricePerHour}
        image={user.image}
        name={user.name}
        profession={user.profession}
        skills={user.skills}
        extraSkillsCount={user.extraSkillsCount}
        info={user.info}
      />
    ))}
  </div>
);

}

export default App;
