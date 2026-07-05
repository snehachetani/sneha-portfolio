export const experience = [
    {
        period: "2025 — 2026",
        role: "Machine Learning Engineer",
        company: "AICU GmbH",
        companyLink: "https://aicuflow.com",
        description:
            "Built production ML features for a high-paced SaaS startup, covering recommendation workflows, forecasting pipelines, AI-agent interactions, and client-specific automation projects. Worked across the full path from problem definition to deployment: translating client requirements, designing model and data pipelines, integrating them into backend services, and monitoring them in production.",
        tags: ["Recommendation Systems", "RAG", "AI Agents", "Qdrant", "AWS", "Django", "Docker"]
    },
    {
        period: "2024 — 2025",
        role: "Research Assistant",
        company: "Saarland University · CompLing",
        workLabel: "Can LLMs subtract numbers?",
        workLink: "https://arxiv.org/abs/2511.02795",
        description:
            "Built evaluation pipelines for controlled arithmetic experiments in language models. The work focused on cases where model outputs fail even when useful information appears to be represented internally, especially around subtraction and sign prediction. Ran experiments across model families, digit lengths, and controlled train-test splits to separate memorization from generalization.",
        tags: ["LLMs", "Reasoning", "Evaluation"],
    },
    {
        period: "2024",
        role: "Research Assistant",
        company: "CISPA",
        workLabel: "Confounder-Agnostic Learning: Enhancing Robustness with Projected Gradient Descent",
        workLink: "https://drive.google.com/file/d/1mE_HxyWE5tpvhLXPQfd_lF3Wb5CKN-0X/view?usp=drive_link",
        description:
            "Worked on robust machine learning under distribution shifts. The project used a modified min-max PGD setup to reduce confounding effects without relying on known anchor variables. The work focused on how models behave when spurious correlations change between training and test distributions.",
        tags: ["Robust ML", "PGD", "Distribution Shift"],
    },
    {
        period: "2023 — 2024",
        role: "Research Assistant",
        company: "Foundations of Artificial Intelligence Group",
        description:
            "Ran empirical evaluations for safety verification of neural action policies in symbolic planning environments. Designed environment variants, trained reinforcement-learning policies, and tested how environment choices affected verification complexity and policy safety. The role connected learning-based policies with formal methods, where high task performance alone was not enough.",
        tags: ["Reinforcement Learning", "Planning", "Verification", "CEGAR", "Python"],
    },
];