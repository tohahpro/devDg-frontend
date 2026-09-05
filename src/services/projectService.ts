/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export async function createProject(
    _prevState: any,
    formData: FormData
) {
    try {

        const files = formData.getAll("files") as File[];

        const payload = {
            title: formData.get("title"),
            description: formData.get("description"),

            category: formData.get("category"),
            status: formData.get("status"),
            duration: formData.get("duration"),

            isFeatured: formData.get("isFeatured") === "true",

            live: formData.get("live"),
            gitHubFrontend: formData.get("gitHubFrontend"),
            gitHubBackend: formData.get("gitHubBackend"),

            features: JSON.parse(
                (formData.get("features") as string) || "[]"
            ),

            highlights: JSON.parse(
                (formData.get("highlights") as string) || "[]"
            ),

            challenges: JSON.parse(
                (formData.get("challenges") as string) || "[]"
            ),

            projectState: JSON.parse(
                (formData.get("projectState") as string) || "{}"
            ),

            techStack: JSON.parse(
                (formData.get("techStack") as string) || "[]"
            ),
        };

        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(payload));
        console.log(newFormData)

        files.forEach((file) => {
            newFormData.append("files", file);
        });

        const response = await serverFetch.post("/projects", {
            body: newFormData,
        });

        const result = await response.json();

        return result;

    } catch (error: any) {

        console.log(error);

        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}

export async function getAllProjects(queryString?: string) {

    try {

        const response = await serverFetch.get(`/projects${queryString ? `?${queryString}` : ""}`);

        const result = await response.json();

        return result;

    } catch (error: any) {

        console.log(error);

        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}

export async function getProjectById(id: string) {

    try {

        const response = await serverFetch.get(`/projects/${id}`);

        const result = await response.json();

        return result;

    } catch (error: any) {

        console.log(error);

        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}

export async function getProjectBySlug(slug: string) {

    try {

        const response = await serverFetch.get(`/projects/slug/${slug}`);

        const result = await response.json();

        return result;

    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: process.env.NODE_ENV === "development" ? error.message
                : "Something went wrong",
        };
    }
}

export async function updateProject(
    id: string,
    _prevState: any,
    formData: FormData
) {

    try {

        const files = formData.getAll("files") as File[];

        const payload = {
            title: formData.get("title"),
            description: formData.get("description"),

            category: formData.get("category"),
            status: formData.get("status"),
            duration: formData.get("duration"),

            isFeatured: formData.get("isFeatured") === "true",

            live: formData.get("live"),
            gitHubFrontend: formData.get("gitHubFrontend"),
            gitHubBackend: formData.get("gitHubBackend"),

            features: JSON.parse(
                (formData.get("features") as string) || "[]"
            ),

            highlights: JSON.parse(
                (formData.get("highlights") as string) || "[]"
            ),

            challenges: JSON.parse(
                (formData.get("challenges") as string) || "[]"
            ),

            projectState: JSON.parse(
                (formData.get("projectState") as string) || "{}"
            ),

            techStack: JSON.parse(
                (formData.get("techStack") as string) || "[]"
            ),
        };

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(payload));

        files.forEach((file) => {
            newFormData.append("files", file);
        });

        const response = await serverFetch.patch(`/projects/${id}`, {
            body: newFormData,
        });

        const result = await response.json();

        return result;

    } catch (error: any) {

        console.log(error);

        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}

export async function deleteProject(id: string) {

    try {

        const response = await serverFetch.delete(`/projects/${id}`);

        const result = await response.json();

        return result;

    } catch (error: any) {

        console.log(error);

        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}