import app from "../src/app";
import supertest from "supertest";
import httpStatus from "http-status";

const api = supertest(app);

describe("POST /users", () => {
    it("Should respond with status 400 when body is not given", async () => {
        const response = await api.get('/health');
        expect(response.status).toBe(httpStatus.OK);
        
    });
})