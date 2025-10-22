import { useState, useEffect } from "react";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // AI generated bios
        const bios = {
          1: "$1 is a dynamic problem-solver at $2, known for her creative thinking and leadership in digital solutions.",
          2: "$1 brings structure and vision to $2, building systems that turn complexity into clarity.",
          3: "$1 is a detail-oriented innovator who thrives on collaboration and delivering clean, scalable results.",
          4: "$1 is a people-first developer with a passion for crafting intuitive user experiences at $2.",
          5: "$1 blends creativity and analytics at $2, helping teams move fast while keeping quality high.",
          6: "$1 is an empathetic communicator at $2, driving innovation through teamwork and curiosity.",
          7: "$1 is a pragmatic engineer at $2 who believes great code is invisible when it just works.",
          8: "$1 is a forward-thinking designer who loves turning abstract ideas into elegant, user-focused interfaces.",
          9: "$1 is a lifelong learner and mentor at $2, passionate about simplifying complex problems for users.",
          10: "$1 is a creative storyteller at $2, combining design thinking and technology to craft better experiences.",
        };

        // Shuffle bios
        const bioIds = Object.keys(bios).sort(() => Math.random() - 0.5);

        const withBios = data.map((u, index) => {
          const bioId = bioIds[index];
          const bio = bios[bioId].replace("$1", u.name).replace("$2", u.company.name);

          return {
            ...u,
            bio,
          };
        });

        setUsers(withBios);
      })
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
}
