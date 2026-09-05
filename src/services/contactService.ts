
export async function sendContactMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Request failed");
        }

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