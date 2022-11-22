FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

COPY / ./

RUN dotnet publish demo-app/ThinnesenApi/ThinnesenApi.csproj --configuration Release --source https://api.nuget.org/v3/index.json --output out

FROM mcr.microsoft.com/dotnet/aspnet:6.0 as runtime
WORKDIR /app

COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "ThinnesenApi.dll"]
EXPOSE 80