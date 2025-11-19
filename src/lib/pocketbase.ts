export const defaultPbUrl = import.meta.env.PUBLIC_PB_URL ?? "https://portfolio.ethantouitou.fr:443";

export type CompetenceRecord = {
	id: string;
	Competance?: string;
	category?: string;
	niveau?: string;
};

export type ProjectRecord = {
	id: string;
	titre?: string;
	subtitle?: string;
	cover?: string;
	value_proposition_title?: string;
	context_title?: string;
	context?: string;
	defis_title?: string;
	defis?: string;
	innovations_title?: string;
	innovations_blocks?: string;
	innovations_blocks1?: string;
	innovations_blocks2?: string;
	creation_process_title?: string;
	creation_process_steps?: string;
	creation_process_steps2?: string;
	creation_process_steps3?: string;
	creation_process_steps4?: string;
	creation_process_steps5?: string;
	tech_stack_title?: string;
	tech_stack_description?: string;
	tech_stack_list?: string;
	features_title?: string;
	features_long_text?: string;
	features_images1?: string;
	features_images2?: string;
};

export type ProjectWithAssets = ProjectRecord & {
	coverUrl: string | null;
	featureImg1?: string | null;
	featureImg2?: string | null;
	tags: string[];
};

export const fallbackCompetences: Record<string, string[]> = {
	"Frontend Development": [
		"HTML5",
		"CSS3",
		"JavaScript",
		"TypeScript",
		"TailwindCSS",
		"Astro",
		"React"
	],
	"Backend & API": ["Node.js", "REST API", "GraphQL", "PostgreSQL", "Supabase"],
	"Performance & SEO": [
		"Lighthouse",
		"Core Web Vitals",
		"SEO Technique",
		"Schema Markup",
		"Analytics"
	],
	"Outils & Gestion": ["Git / GitHub", "Figma", "VS Code", "Notion", "Docker"]
};

export const fallbackProject: ProjectRecord = {
	id: "fallback",
	titre: "Emminent",
	subtitle: "Plateforme collaborative avec IA pour personnaliser l'expérience éducative.",
	value_proposition_title: "Le développement contextuel",
	context_title: "Contexte du projet",
	context:
		"Emminent révolutionne l'apprentissage collaboratif en intégrant une IA avancée pour personnaliser l'expérience éducative. Cette plateforme offre un écosystème complet pour apprenants, formateurs et institutions.",
	defis_title: "Défis techniques",
	defis: "Maîtrise de technologies de pointe pour créer une expérience fluide et performante.",
	innovations_title: "Idées & Innovations",
	innovations_blocks: "IA personnalisée pour des parcours adaptatifs.",
	innovations_blocks1: "Collaboration en temps réel et feedback instantané.",
	innovations_blocks2: "Expérience immersive avec gamification et suivi personnalisé.",
	creation_process_title: "Processus de création",
	creation_process_steps: "Recherche & Analyse – étude des besoins éducatifs et de l'écosystème digital.",
	creation_process_steps2: "UX/UI Design – prototypes collaboratifs et design system éducatif.",
	creation_process_steps3: "Développement Full-Stack – architecture scalable, intégration IA et APIs.",
	creation_process_steps4: "Tests & Validation – tests utilisateurs, validation pédagogique et performance.",
	creation_process_steps5: "Déploiement & Évolution – analytics avancées et amélioration continue.",
	tech_stack_title: "Stack technologique",
	tech_stack_description: "Technologies de pointe pour une plateforme collaborative avec IA intégrée.",
	tech_stack_list: "Astro, TailwindCSS, PocketBase, OpenAI, Supabase, VSCode, Figma",
	features_title: "Fonctionnalités clés",
	features_long_text:
		"Découvrir les fonctionnalités innovantes qui font d'Emminent une plateforme d'apprentissage révolutionnaire."
};

const buildFileUrl = (pbUrl: string, collection: string, id: string, filename?: string) =>
	filename ? `${pbUrl}/api/files/${collection}/${id}/${filename}` : null;

export async function fetchCompetenceGroups(pbUrl: string = defaultPbUrl) {
	try {
		const res = await fetch(`${pbUrl}/api/collections/Competances/records?perPage=50`);
		if (!res.ok) return fallbackCompetences;
		const data = await res.json();
		const items = (data?.items ?? []) as CompetenceRecord[];
		if (!items.length) return fallbackCompetences;
		return items.reduce((acc, item) => {
			const cat = item.category || "Autres";
			if (!acc[cat]) acc[cat] = [];
			if (item.Competance) acc[cat].push(item.Competance);
			return acc;
		}, {} as Record<string, string[]>);
	} catch {
		return fallbackCompetences;
	}
}

export function normalizeProject(proj: ProjectRecord, pbUrl: string = defaultPbUrl): ProjectWithAssets {
	const coverUrl = buildFileUrl(pbUrl, "Projets", proj.id, proj.cover);
	const featureImg1 = buildFileUrl(pbUrl, "Projets", proj.id, proj.features_images1);
	const featureImg2 = buildFileUrl(pbUrl, "Projets", proj.id, proj.features_images2);
	const tags =
		proj.tech_stack_list
			?.split(",")
			.map((t) => t.trim())
			.filter(Boolean) ?? ["Astro", "TailwindCSS", "PocketBase"];
	return { ...proj, coverUrl, featureImg1, featureImg2, tags };
}

export async function fetchProjects(pbUrl: string = defaultPbUrl, limit = 10): Promise<ProjectWithAssets[]> {
	try {
		const res = await fetch(`${pbUrl}/api/collections/Projets/records?perPage=${limit}&sort=-created`);
		if (!res.ok) return [normalizeProject(fallbackProject, pbUrl)];
		const data = await res.json();
		const items = (data?.items ?? []) as ProjectRecord[];
		if (!items.length) return [normalizeProject(fallbackProject, pbUrl)];
		return items.map((proj) => normalizeProject(proj, pbUrl));
	} catch {
		return [normalizeProject(fallbackProject, pbUrl)];
	}
}

export async function fetchLatestProject(pbUrl: string = defaultPbUrl): Promise<ProjectWithAssets> {
	const projects = await fetchProjects(pbUrl, 1);
	return projects[0];
}
