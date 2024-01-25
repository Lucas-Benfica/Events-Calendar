import prisma from "@/database";

export async function cleanDb() {
    await prisma.invitation.deleteMany();
    await prisma.userAllEvent.deleteMany();
    await prisma.event.deleteMany();
    await prisma.user.deleteMany();
}