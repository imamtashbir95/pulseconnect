import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    username,
    email_addresses,
    image_url
) => {
    try {
        await connectToDB();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName : first_name,
                    lastName: last_name,
                    username: username,
                    email: email_addresses[0].email_address,
                    profileImage: image_url,
                },
            },

            { upsert: true, new: true } // If a user doesn't exist, create a new one.
        );
        await user.save();
        return user;
    }
    catch (error) {
        console.error(error);
    }
};

export const deleteUser = async (id) => {
    try {
        await connectToDB();
        await User.findOneAndUpdate({ clerkId: id });
    }
    catch (error) {
        console.error(error);
    }
}