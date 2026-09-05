export const MAX_BLOG_IMAGE_SIZE = 5 * 1024 * 1024;

export const ALLOWED_BLOG_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
];

export function normalizeUrl(url: string): string {
    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
        return "";
    }

    const supportedPrefixes = [
        "http://",
        "https://",
        "mailto:",
        "tel:",
        "/",
        "#",
    ];

    const hasSupportedPrefix = supportedPrefixes.some((prefix) =>
        trimmedUrl.startsWith(prefix),
    );

    if (hasSupportedPrefix) {
        return trimmedUrl;
    }

    return `https://${trimmedUrl}`;
}

export function validateImageFile(file: File): string | null {
    if (!ALLOWED_BLOG_IMAGE_TYPES.includes(file.type)) {
        return "Please select a JPG, PNG, WebP, or GIF image.";
    }

    if (file.size > MAX_BLOG_IMAGE_SIZE) {
        return "Image size must be less than 5 MB.";
    }

    return null;
}