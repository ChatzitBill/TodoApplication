# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /app

# Copy the project files and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the application
COPY . ./

# Publish the application to the /out folder
RUN dotnet publish -c Release -o /out

# Use the official .NET runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0

# Set the working directory
WORKDIR /app

# Copy the published app from the build container
COPY --from=build /out .

# Expose the port for the API
EXPOSE 5135

# Start the ASP.NET Core application
CMD ["dotnet", "TodoApi.dll"]
