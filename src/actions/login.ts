"use server";
export async function handleAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
}
