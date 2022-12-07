FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine AS build-env
WORKDIR /app

COPY / ./

RUN dotnedt publish demo-app/ThinnesenApi/ThinnesenApi.csproj --configuration Release --source https://api.nuget.org/v3/index.json --output out

FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine as runtime
WORKDIR /app

COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "ThinnesenApi.dll"]
EXPOSE 80
